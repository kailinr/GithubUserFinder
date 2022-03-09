//Revised Github.js using PAT Auth
class Github {
  constructor() {
      this.config = {
        headers: {
          Authorization: `token ${ghSecret}`,
      },
    }
    this.repos_count = 10;
    this.repos_sort = 'created:asc'
  }

  async getUser(user) {
   
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config)

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profileData,
      reposData
    }
  }

  
}