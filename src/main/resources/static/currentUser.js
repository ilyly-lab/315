'use strict';

getCurrentUser()

function getCurrentUser() {
    fetch("userApi/auth")
        .then(res => {
            return res?.json()
        })
        .then(js => {
            const roles = js?.authorities?.map(authority => `<th>${authority?.role}</th>`)
            const roles1 = js?.authorities?.map(authority => `<li>${authority?.role}</li>`).join('')
            $('#emailCurrentUser').append(`<span>${js?.email}</span>`)
            $('#roleCurrentUser').append(`<span>${roles}</span>`)
            //$('#roleCurrenUser').append('<a class="navbar-brand">${js.roleList.map((el)=>el.name.toString())}</a>')
            /*var roless = js.roleList;
            var roleNames = [];

            roless.forEach(function(role) {
                roleNames.push(role.name);
            });
            $('#roleCurrentUser').append('<a href="#">' + roleNames.join(', ') + '</a>');*/
            const user = `$(
                    <tr>
                        <td>${js?.id}</td>
                        <td>${js?.username}</td>
                        <td>${js?.surname}</td>
                        <td>${js?.email}</td>
                        <td>${js?.phone_number}</td>
                        <td>${roles1}</td>
                    </tr>)`;
            $('#oneUser').append(user)
        })
}