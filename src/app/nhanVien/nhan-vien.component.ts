import {Component, OnInit} from '@angular/core';
import {NhanVien} from "../nhanVien";


@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.css']
})
export class NhanVienComponent implements OnInit {

  nhanVien: NhanVien = {}
  nhanViens: NhanVien[] = [
    {
      name: 'thao',
      age: 19,
      adress: 'hưng yên'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  addNewNhanVien() {
    this.nhanViens.push(this.nhanVien);
  }

  deleteNV(name: string) {
    for (let i = 0; i < this.nhanViens.length; i++) {
      if (this.nhanViens[i] === name) {
        this.nhanViens.splice(i, 1)
      }
    }
  }

  // edit(name: string, age: number, adress: string) {
  //   for (let i = 0; i < this.nhanViens.length; i++) {
  //     if (this.nhanViens[i].name === name) {
  //       this.nhanViens[i] = {name,age,adress}
  //     }
  //   }
  //
  //
  // }
}
