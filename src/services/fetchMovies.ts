import axios from "axios"
import { API_URL } from "./config"

export const fetchMovies = async ({ page }: { readonly page: number }) => {
  const config = {
    method: "get",
    url: `${API_URL}/discover`,
    params: {
      page,
    },
  }

  const response = await axios(config)
  return response.data
}
