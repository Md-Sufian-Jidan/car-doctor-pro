export const getServices = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVICES}`)
    const services = res.json();
    return services;
};

export const getServicesDetails = async (id) => {
    console.log(id);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SINGLE_SERVICES}/${id}`)
    const services = res.json();
    return services;
};