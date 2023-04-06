
const token= '93fe752a8748f41b60f357ed1903d7dbff24066d2f63f1da'
//'x-access-token': `Bearer ${token}`,


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://spice-tabby-ulna.glitch.me`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },
    
    create: async (data: any = {}) => {
        const response = await fetch(`https://spice-tabby-ulna.glitch.me`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://spice-tabby-ulna.glitch.me`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://spice-tabby-ulna.glitch.me`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}