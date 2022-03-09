//A rewrite with the PAT toek upgrade. Find in the Q&A section here: https://www.udemy.com/course/modern-javascript-from-the-beginning/learn/lecture/8762422#questions/9372047 

//For this to work, you need to create a new PAT token and then enter it into token.js's ghSecret file


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

    // const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    )


    // const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profileData,
      reposData
    }
  }

  
}