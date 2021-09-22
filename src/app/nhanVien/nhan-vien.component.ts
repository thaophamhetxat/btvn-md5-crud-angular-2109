import {Component, OnInit} from '@angular/core';
import {NhanVien} from "../nhanVien";
import {count} from "rxjs/operators";


@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.css']
})
export class NhanVienComponent implements OnInit {
  id: number = 0;
  name: string = '';
  age: number = 0;
  adress: string = '';
  action: boolean = false;

  nhanVien: NhanVien = {}
  nhanViens: NhanVien[] = [
    {
      id: 1,
      name: 'thao',
      age: 19,
      adress: 'hưng yên',
      action: false
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  addNewNhanVien() {
    this.nhanViens.push(this.nhanVien);
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.adress = '';
    return;
  }

  deleteNV(id: number | undefined) {
    const index = this.nhanViens.findIndex(e => e.id === id);
    this.nhanViens.splice(index, 1);
    return;
  }


  showEdit(id: number | undefined) {
    for (let i = 0; i < this.nhanViens.length; i++) {
      if (this.nhanViens[i].id === id) {
        this.nhanVien.id = this.nhanViens[i].id;
        this.nhanVien.name = this.nhanViens[i].name;
        this.nhanVien.age = this.nhanViens[i].age;
        this.nhanVien.adress = this.nhanViens[i].adress;
        return;
      }
    }

  }

  submitEdit(id: number| undefined) {
    for (let i = 0; i < this.nhanViens.length; i++) {
      if (this.nhanViens[i].id === id) {
        // @ts-ignore
        this.nhanViens.pop(this.nhanVien);
        this.nhanViens.push(this.nhanVien);
        this.id = 0;
        this.name = '';
        this.age = 0;
        this.adress = '';
        return;
      }
    }
  }
}
