import React from "react";

interface User {
    name: string
    age: string
    // "date": "17/09/2021",
    //     "units": 24
}
class UserList extends React.Component<any, any> {
    users: any;


    constructor(props: any) {
        super(props);

        this.state = {
            users: [],
        };

        this.getRandomUsers = this.getRandomUsers.bind(this);
    }

    myArray = [{ id: 1, name: 'shivu' }, { id: 2, name: 'Niranjan' }]


    async getRandomUsers() {
        const res = await fetch(`https://randomuser.me/api/?results=10`);
        // https://my.api.mockaroo.com/graph.json?key=158c1970
        const data = await res.json();
        return data.results;
    }

    async componentDidMount() {
        const users = await this.getRandomUsers();
        this.setState({ users });
        console.log('shivu', users);
    }


    render() {
        // this.state = [{ id: 1, name: 'shivu' }, { id: 2, name: 'Niranjan' }]

        let newusers= this.myArray.map((user)=>{
            return {name: user.id + ' ' + user.name}

})
        return <div>
           {/* {this.newusers} */}
        </div>

    }
}
export default UserList