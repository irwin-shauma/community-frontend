import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <body class="bg-purple">
      <div class="stars">
        <div class="custom-navbar">
          <div class="brand-logo flex gap-2 text-red-500">
            <img src="https://i.ibb.co/vL1ZCzm/logo.png" width="30px" />
            <h3>Communify</h3>
          </div>
          <div class="navbar-links"></div>
        </div>
        <div class="central-body">
          <img
            class="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
          />
          <a href="/threads-main" class="btn-go-home" target="_blank"
            >GO BACK HOME</a
          >
        </div>
        <div class="objects">
          <img
            class="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
          />
          <div class="earth-moon">
            <img
              class="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
            />
            <img
              class="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
            />
          </div>
          <div class="box_astronaut">
            <img
              class="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
            />
          </div>
        </div>
        <div class="glowing_stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </div>
    </body>
  `,
  styleUrls: ['./notfound.style.css'],
})
export class NotFoundComponent {}
