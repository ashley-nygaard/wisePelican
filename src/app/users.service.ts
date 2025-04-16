import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseId = environment.base;
  private apiUrl = `https://api.airtable.com/v0/${this.baseId}`;

  constructor(private http: HttpClient) {
  }

  // mockData
  // userList: User[] = [
  //   {
  //     id: 1,
  //     name: "Billy Joe",
  //     email: "no@no.com",
  //     credits: 123,
  //   },
  //   {
  //     id: 2,
  //     name: "Billyoe",
  //     email: "no@no.com",
  //     credits: 12399,
  //   },
  //   {
  //     id: 3,
  //     name: "Billy ",
  //     email: "no@no.com",
  //     credits: 1230,
  //   },
  //   {
  //     id: 4,
  //     name: " joe",
  //     email: "no@no.com",
  //     credits: 45,
  //   },
  // ]


  getRecords(tableName: string) {
    return this.http.get(`${this.apiUrl}/${tableName}`)
      .pipe(map((response: any) => response.records.map((record: any) => ({
          ...record.fields
        })))
      );
  }

  getUser(tableName: string, userName: string) {
    const preUsre = userName.charAt(0).toUpperCase() + userName.slice(1);

    return this.http.get(`${this.apiUrl}/${tableName}?filterByFormula=name='${preUsre}'`)
      .pipe(map((response: any) => response.records.map((record: any) => ({
          ...record.fields
        })))
      );
  }


  updateUser(recordId: number, credits: number) {
    const url = `${this.apiUrl}/Users/${recordId}`;
    // we only care about the credits. Patch only updates given fields
    const body = {
      fields: {
        credits: credits,
      }
    }
    this.http.patch(url, body).subscribe({
      next: (response: any) => {
        console.log('Updated Record ID:', response.id);
      },
      error: (err) => {
        console.error('Error updating record:', err);
        alert('The update could not be completed');
      }
    });  }


  findUserThenUpdate(customId: number, credits: number) {
    // we have to find the user because we have our own ID and airtable requires the recordID ONLY in order to update
    const url = `${this.apiUrl}/Users?filterByFormula=id=${customId}`;


    // requires any or type error occur. Add airtable type later
    this.http.get<any>(url).subscribe({
      // @ts-ignore
      next: (res) => {
        const record = res.records[0];
        if (record) {
          const recordId = record.id;
          this.updateUser(recordId, credits);
        } else {
          console.warn('No record found with id =', customId);
        }
      },
      error: (err) => {
        console.error('Error fetching record:', err);
      }
    });
  }


} // end of service
