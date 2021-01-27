import { Component, OnInit } from "@angular/core";
import { navItems } from "../nav-item";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  navItems: navItems[] = [
    {
      displayName: "Lập Trình",
      iconName: "recent_actors",
      children: [
        {
          displayName: "Programming",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Web Fontend",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Web Backend",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Mobile Dev",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Database",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Công Cụ",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
        {
          displayName: "Programming",
          iconName: "group",
          children: [
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
            {
              displayName: "Python",
              iconName: "person",
              route: "michael-prentice",
            },
          ],
        },
      ],
    },
    {
      displayName: "Video",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Khóa Học",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Webmaster",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Mã Giảm Giá",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Wordpress",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Tin học",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Thủ Thuật",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
    {
      displayName: "Môn Học",
      iconName: "videocam",
      children: [
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
        {
          displayName: "Python",
          iconName: "person",
          route: "michael-prentice",
        },
      ],
    },
  ];
}
