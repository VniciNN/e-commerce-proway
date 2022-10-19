import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder,
    private contatoService: ContatoService
  ) { }

  ngOnInit(): void {
    //this.getInfoOfForms();
  }

  private postNewsInformations(info: any) {
    this.contatoService.postNewsInformations(info).subscribe({
      next: (data: any) => {
        alert("A mensagem foi enviada");
        this.formContato.reset();
      },
      error: (error: any) => {
        
      }
    })
  }

  getInfoOfForms() {
    this.contatoService.getAllInformations().subscribe({
      next: (data: any) => { 
        console.log(data)
      },
      error: (error: any) => { 

      }
    })
  }

  enviarFormulario() {
    let fullContract = {
      nome: this.formContato.value.nome,
      assunto: this.formContato.value.assunto,
      celular: String(this.formContato.value.telefone),
      email: this.formContato.value.email,
      mensagem: this.formContato.value.mensagem
    }

    this.postNewsInformations(fullContract);  
  }

}
