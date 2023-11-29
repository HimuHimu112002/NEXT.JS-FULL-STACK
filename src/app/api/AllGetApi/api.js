export async function HeroData(){
    const res=await fetch("https://agency.teamrabbil.com/api/HeroList");
    const result = res.json()
    return result;
}

export async function WorkData(){
    const res=await fetch("https://agency.teamrabbil.com/api/WorkList");
    return res.json();
}

export async function getStatusData(){
    const res=await fetch("https://agency.teamrabbil.com/api/StatList");
    return res.json();
}

export async function FeaturedData(){
    const res=await fetch("https://agency.teamrabbil.com/api/FeaturedProject");
    return res.json();
}