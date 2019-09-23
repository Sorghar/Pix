import { HttpHeaders } from '@angular/common/http';

export const apiUrl = 'https://gorest.co.in/public-api';
export const token = 'Bearer E8YUQ2UoEDqsIf6vfT7sY4m9nrUm5HCWkXQE';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization : `${token}` })
};
