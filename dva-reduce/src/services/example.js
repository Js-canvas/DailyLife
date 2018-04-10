import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}