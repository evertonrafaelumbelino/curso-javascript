async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/evertonrafaelumbelino/curso-javascript/refs/heads/main/portifolio/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}