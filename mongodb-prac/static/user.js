async function signUp(){
    const form = document.forms['signup'];
    if (form.id.value.length === 0 || form.nickname.value.length === 0 || form.pw.value.length === 0 || form.address.value.length === 0) {
        alert('정보를 모두 기입해주세요');
        return;
    }

    if (form.nickname.value.length > 10) {
        alert('이름은 10글자 미만입니다!');
        return;
    }

    await axios({
        method: 'POST',
        url: '/user/signup',
        data: {
            userid: form.id.value,
            userpw: form.pw.value,
            nickname: form.nickname.value,
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

function editProfile(){
const form = document.forms['profile'];
if (form.pw.value.length === 0 || form.name.value.length === 0) {
    alert('정보를 제대로 기입해주세요');
    return;
}

axios({
    method: 'PATCH',
    url: '/user/edit',
    data: {
        userid: form.id.value,
        pw: form.pw.value,
        name: form.name.value
    }
}).then((res) => {
    if(res.data.editSuccess){
        alert('정보 수정 완료');

        document.cookie = 'loginUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/user/profile;';

        document.location.href = '/user';   
    }
})
}

function deleteProfile(){
const form = document.forms['profile'];

axios({
    method: 'DELETE',
    url: '/user/delete',
    data: {
        userid: form.id.value
    }
}).then((res) => {
    alert(res.data.result);
    document.location.href = '/user';
})
}