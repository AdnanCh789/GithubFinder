class Github {
constructor () {

    this.client_id = '960a3cdf8c1ecec528e9';
    this.client_secret = 'f33901be5615907a50505e027394fd5bbfa83e53';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
}

async getUser (user) {  
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
        profile,
        repos
    }

}



} 