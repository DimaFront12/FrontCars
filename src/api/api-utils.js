export const getData = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const normalizeDataObject = (obj) => {
  let str = JSON.stringify(obj)

  str = str.replaceAll('_id', 'id');
  const newObj = JSON.parse(str)
  const result = { ...newObj, category: newObj.categories }
  return result;
}

export const normalizeData = (data) => {
  return data.map((item) => {
    return normalizeDataObject(item)
  })
}

export const isResponseOk = (response) => {
  return !(response instanceof Error)
};

export const getNormalizedGamesDataByCategory = async (url, category) => {
  const data = await getData(`${url}?categories.name=${category}`)
  return isResponseOk(data) ? normalizeData(data) : data
};

export const getNormalizedGameDataById = async (url, id) => {
  const data = await getData(`${url}/${id}`)
  return isResponseOk(data) ? normalizeDataObject(data) : data
};

export const authorize = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      throw new Error(response.message)
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

export const register = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      throw new Error(response.message)
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

export const getMe = async (url, jwt) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${jwt}` },
    })
    if (response.status !== 200) {
      throw new Error('Ошибка получения данных')
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
};

export const getUser = async (url, id) => {
  try {
    const response = await fetch(`${url}/${id}`)
    if (response.status !== 200) {
      throw new Error(response.message)
    }
    const result = await response.json()
    return result
  } catch (error) {
    return error
  }
}

export const setJWT = (jwt) => {
  localStorage.setItem("jwt", jwt)
}

export const getJWT = () => {
  return localStorage.getItem("jwt")
}

export const removeJWT = () => {
  localStorage.removeItem("jwt")
}