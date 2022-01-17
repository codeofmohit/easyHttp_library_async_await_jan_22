class easyHttp {
    // method for making get request 
    async get(apiEndpint) {
        let response = await fetch(apiEndpint);
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            return new Error('Something went wrong can not fetch the api!');
        }
    }
    // method for making post request 
    async post(apiEndpint, data) {
        let response = await fetch(apiEndpint, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            return new Error('Something went wrong can not fetch the api!');
        }
    }
    // method for making put request 

    async put(apiEndpint, data) {
        let response = await fetch(apiEndpint, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            let data = await response.json();
            return data;
        } else {
            return new Error('something went wrong, can not fetch the api!');
        }
    }
    // method for making delete request 
    async delete(apiEndpint) {
        let response = await fetch(apiEndpint, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (response.status === 200) {
            return 'user deleted successfully!';
        } else {
            return new Error('Something went wrong can not fetch the api');
        }
    }
}
export default easyHttp;