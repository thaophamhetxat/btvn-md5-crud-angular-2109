import {Component, OnInit} from '@angular/core';
import {NhanVien} from "../nhanVien";
import {count} from "rxjs/operators";


@Component({
  selector: 'app-nhan-vien',
  templateUrl: './nhan-vien.component.html',
  styleUrls: ['./nhan-vien.component.css']
})
export class NhanVienComponent implements OnInit {

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

  }

  deleteNV(id: number | undefined) {
    const index = this.nhanViens.findIndex(e => e.id === id);
    this.nhanViens.splice(index, 1);
  }

  edit(id: number | undefined, name: string | undefined, age: number | undefined, adress: string | undefined) {
    for (let i = 0; i < this.nhanViens.length; i++) {
      if (this.nhanViens[i].id === id) {
        this.nhanViens[i] = {id, name, age, adress}
      }
    }
  }
}
