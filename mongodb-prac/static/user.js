async function signUp(){
    const form = document.forms['signup'];
    // if (form.id.value.length === 0 || form.nickname.value.length === 0 || form.pw.value.length === 0 || form.address.value.length === 0) {
    //     alert('정보를 모두 기입해주세요');
    //     return;
    // }

    // if (form.nickname.value.length > 10) {
    //     alert('이름은 10글자 미만입니다!');
    //     return;
    // }

    await axios({
        method: 'POST',
        url: '/user/signup',
        data: {
            userid: form.id.value,
            userpw: form.pw.value,
            nickname: form.nickname.value,
            email: form.email.value,
            contact: form.contact.value,
            address: form.address.value
        }
    }).then((res) => {
        const result = res.data.existUser;
        console.log(result);
        if(!result) {
            alert('회원가입 성공');
            document.location.href = '/user';
        } else {
            form.id.value = '';
            form.pw.value = '';
            form.nickname.value = '';
            form.address.value = '';
            alert('중복된 아이디입니다 다시 입력해주세요');
        }
    })
}

async function tryLogin(){
    const form = document.forms['login'];
    if (form.id.value.length === 0 || form.pw.value.length === 0) {
        alert('정보를 모두 기입해주세요');
        return;
    }

    await axios({
        method: 'POST',
        url: '/user/login',
        data: {
            userid: form.id.value,
            userpw: form.pw.value
        }
    }).then((res) => {
        console.log(res);
        document.location.href = '/user'
    })
}

async function profileImgUpload(){
    try{
        const form = document.forms['profile'];
        const file = form.profileImg;
        const userId = form.id.value;

        console.log(file);
        const currentImgsrc = document.getElementById('profile').getAttribute('src');

        let uploadImgUrl = '';

        const formData = new FormData();
        formData.append('files', file.files[0]); 

        await axios({
            method: 'post',
            url: '/user/profile/upload',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            if(res.data[0] != undefined){
                uploadImgUrl = res.data[0].location;
                axios({
                    method: 'patch',
                    url: '/user/profile/img_edit',
                    data: {
                        user_id: userId,
                        uploadImgurl: uploadImgUrl,
                        currentImgsrc: currentImgsrc
                    }
                }).then((res) => {
                    location.reload(true);
                })
            }
        })    
    } catch(err){
        console.error(err);
    }

}

function editProfile(){
const form = document.forms['profile'];
if (form.pw.value.length === 0) {
    alert('정보를 변경할 경우 비밀번호 재입력이 필요합니다.');
    return;
}

axios({
    method: 'PATCH',
    url: '/user/profile/edit',
    data: {
        id: form.id.value,
        pw: form.pw.value,
        name: form.nickname.value,
        addr: form.address.value
    }
}).then((res) => {
    if(res.data.editSuccess){
        alert('정보 수정 완료');

        document.cookie = 'loginUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        document.location.href = '/user';   
    } else{
        alert('fail');
    }
})
}

function deleteProfile(){
const form = document.forms['profile'];

axios({
    method: 'DELETE',
    url: '/user/profile/delete',
    data: {
        userid: form.id.value
    }
}).then((res) => {
    alert(res.data.result);
    document.location.href = '/user';
})
}