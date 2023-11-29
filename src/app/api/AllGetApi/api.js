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

export async function TeamData(){
    const res=await fetch("https://agency.teamrabbil.com/api/TeamList");
    return res.json();
}

export async function ServiceData(){
    const res=await fetch("https://agency.teamrabbil.com/api/AllService");
    return res.json();
}

export async function ProjectData(){
    const res=await fetch("https://agency.teamrabbil.com/api/AllProject");
    return res.json();
}

export async function TestimonialData(){
    const res=await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    return res.json();
}