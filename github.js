class Github {
constructor () {

    this.client_id = '960a3cdf8c1ecec528e9';
    this.client_secret = 'f33901be5615907a50505e027394fd5bbfa83e53';
}

async getUser (user) {  
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
        profile
    }

}



} 