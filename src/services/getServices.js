export const getServices = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/services/api/getAll`)
        const services = res.json();
        return services;
    }
    catch (err) {
        console.log(err);
        return []
    }
};

export const getServicesDetails = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/services/api/${id}`)
        const services = await res.json();
        return services;
    }
    catch (err) {
        console.log(err);
        return []
    }
};