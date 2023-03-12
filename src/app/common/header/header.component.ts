import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../core/auth/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  role!: string | null;
  username!: string | null;
  display: boolean = false;

  @ViewChild('Menu') menu!:  Menu;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('x-user')
    this.role = localStorage.getItem('x-user-role')

    this.items = [{
      label: 'Menu',
      items: [
        { label: 'Perfil', icon: 'pi pi-user', command: (event) => { this.showPerfil() } },
        { label: 'Open', icon: 'pi pi-download' }
      ]
    },
    {
      label: 'Opciones',
      items: [
        { label: 'Cambiar Contraseña', icon: 'pi pi-unlock' },
        { label: 'Cerrar Sesión', icon: 'pi pi-sign-out', command: (event) => { this.signOut() } }
      ]
    }];
  }

  showPerfil() {
    this.display = true;
  }

  signOut() {
    Swal.fire({
      title: 'Esta apunto de cerrar sesión',
      text: 'Desea Continuar?',
      icon: 'warning',
      confirmButtonText: 'Cerrar Sesión',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#3B82F6',
      cancelButtonColor: '#EF4444',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          title: 'Esta Cerrando Sesión',
          icon: 'warning',
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            setInterval(() => {
              this.authService.signOut();
              this.router.navigateByUrl('auth/login')
            }, 1500)
          }
        })
      }
    });
  }


}
