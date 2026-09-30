// @ts-expect-error: Install the `xlsx` package and its types in the project to remove this suppression.

import * as XLSX from 'xlsx';

export class DDT {
    

    workbook: any;
    sheet: any;
    data: any[];

    username_data: string;
    password_data: string;

    constructor() {

        this.workbook = XLSX.readFile(
            "C:\\Users\\Ataullah Khan\\OneDrive\\Desktop\\Book1.xlsx"
        );

        this.sheet = this.workbook.Sheets['Test'];

        this.data = XLSX.utils.sheet_to_json(this.sheet);

        let row =0

this.username_data = this.data[row].Username;
this.password_data = this.data[row].Password;

console.log(this.username_data);
console.log(this.password_data);
    }
}
const ddt = new DDT();


/*
The key idea is:

this means "the current object".

In your DDT class, you are using this because you want to store and access data that belongs to the current DDT object.

Let's go through your code slowly.
*/

/* In your DDT class, the constructor is created because you want the Excel file to be read and the DDT data to be prepared automatically when you create the DDT object.*/