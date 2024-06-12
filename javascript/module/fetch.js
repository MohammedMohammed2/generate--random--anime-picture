
export async function getdata(type,category){
    const url = `https://api.waifu.pics/${type}/${category}`
    const response = await fetch(url);
    const data = await response.json();  
    return data;
}

