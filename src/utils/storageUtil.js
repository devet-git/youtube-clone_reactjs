const storageUtil = {
	cache: {
		add: (collectionName, key, value) => {
			const data = new Response(JSON.stringify(value))
			if ('caches' in window) {
				caches.open(collectionName).then((cache) => {
					cache.put(key, data)
				})
			}
		}
	},
	local: {
		add: (key, value) => {
			if (typeof (value) !== "string")
				value = JSON.stringify(value)
			localStorage.setItem(key, value)
		},
		get: (key) => {
			return JSON.parse(localStorage.getItem(key)) || null
		},
		delete: (key) => {
			localStorage.removeItem(key)
		},
		deleteAll: () => {
			localStorage.clear();
		}
	}

}
export default storageUtil