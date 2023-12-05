function signUp(){
    const form = document.forms['signup'];
    if (form.id.value.length === 0 || form.name.value.length === 0 || form.password.value.length === 0) {
        alert('정보를 모두 기입해주세요');
        return;
    }

    if (form.name.value.length > 10) {
        alert('이름은 10글자 미만입니다!');
        return;
    }

    axios({
        method: 'POST',
        url: '/user/signup',
        data: {
            userid: form.id.value,
            pw: form.password.value,
            name: form.name.value
        }
    }).then((res) => {
        console.log(res.data);
        document.location.href = '/user/signin';
    })
}

function login(){
    const form = document.forms['signin'];
    if (form.id.value.length === 0 || form.pw.value.length === 0) {
        alert('정보를 모두 기입해주세요');
        return;
    }

    axios({
        method: 'POST',
        url: '/user/signin',
        data: {
            userid: form.id.value,
            pw: form.pw.value,
        }
    }).then((res) => {
        const success = res.data.checklogin;
        if(success) {
            alert('로그인 성공');
            sessionStorage.setItem('isLoginUser', form.id.value);
            document.location.href = '/user/profile';
        } else {
            form.id.value = null;
            form.pw.value = null;
            alert('로그인 실패');
            
        }
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
        url: '/user/profile/edit',
        data: {
            userid: form.id.value,
            pw: form.pw.value,
            name: form.name.value
        }
    }).then((res) => {
        alert(res.data.result);
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