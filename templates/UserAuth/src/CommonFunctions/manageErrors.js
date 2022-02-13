export default function manageError(response) {
    if (response.status === 500) {
        window.location.href = "/error/500/"
    } else if (response.status === 400) {
        window.location.href = "/error/400/"
    } else if (response.status === 403) {
        window.location.href = "/error/403/"
    } else if (response.status === 404) {
        window.location.href = "/error/404/"
    } else {
        return response
    }
}