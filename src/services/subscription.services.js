import axios from 'axios'

class SubscriptionService {
    constructor() {

        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/subscriptions`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getSubscriptions() {
        return this.api.get(`/getAllSubscriptions`)
    }

    getSubscriptionDetails(subscription_id) {
        return this.api.get(`/getOneSubscription/${subscription_id}`)
    }

    getSubscriptionsByOwner(ownerId) {
        return this.api.get(`/getSubscriptionsByOwner/${ownerId}`)
    }

    saveSubscription(subscriptionData) {
        return this.api.post(`/saveSubscription`, subscriptionData)
    }

    editSubscription(subscription_id, subscriptionData) {
        console.log("este es el id de la subscripción-----------", subscription_id)
        // console.log("esto es lo que le estoy mandando ala api la subscriptionData:", subscriptionData)

        // me esta llegando udefined a la subscriptionData y a la subscriptionId me llega el objeto entero de la subscirpcion editada

        return this.api.put(`/editSubscription/${subscription_id}`, subscriptionData)
    }

    deleteSubscription(subscription_id) {
        return this.api.delete(`/deleteSubscription/${subscription_id}`)
    }
}
const subscriptionService = new SubscriptionService()
export default subscriptionService