const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 3 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m115.syncusercontent.com/mfs-60:1528f339481ce2d8f853bf5b9b71a2ed=============================/p/Isekai.Meikyuu.De.Harem.Wo.S01e03.Unrated.Vostfr.1080P.Webrip.french-anime.com.mp4?allowdd=0&datakey=D6tTo9lgKikCytFjFgTIcPGb8fE8J7iucYf3cr/ZAIATeYo3OiOTzIX37BRzwXpPWeptxUjAr9FW4i80sDHm4bL1CPFWfz1uiLNLwPVXA3p5KJOA21wn7KTFo7t75jFjRde2cLBR95ontHzYhbXYo1xAfnYoIgE5bJLOPHAiH8NieAQ1fgqLway7AOpQ+ADwsBA2JqTOUmb40v9TIDSAdf0IG5CdsG9O/vZAi/VIvWohe1pXxG8Xx7e02XVGGvEaqX5bfbgInn/qDr0Z0V4U357az/iRG4KzbwuKJG82rtxlk+1z/mnhvFmTN1cQHUIZMLslwWgeycD8tDc/wwdlAw&engine=ln-2.3.7.3&errurl=UbJk4JCvBCy2n5Dp7KRA5eY9wsOMXgTsiN4Zh3G6IbF+FgVt7MHorBhJd/7wPx03cBGdh+toHLlEnjM2NZeNwXbHLp1m5VFTHL+8r7LYc8CLuFAS3kVjCM17p/Z2INPiGZvS47y2tKaXuhk24zyqIW6xPthOOZVazXkd2FDFgakNlIu6HS9VQDswbOeF5Nr1j4xmQQ5n5z+m1WCBLfUmIU9GRomxhMJlxAmZqp+QDri4QrudAKqAq5gQFhHOrjYjJUvNnA6pSJXDC8bmTZkY49kMaFuruL2/wHNq9UVldeL4gRl13XTPyawZwKZf5V7d9/7HqdTCO9Rsx1yiHZaGqA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iSXNla2FpLk1laWt5dXUuRGUuSGFyZW0uV28uUzAxZTAzLlVucmF0ZWQuVm9zdGZyLjEwODBQLldlYnJpcC5mcmVuY2gtYW5pbWUuY29tLm1wNCI7ZmlsZW5hbWUqPVVURi04JydJc2VrYWkuTWVpa3l1dS5EZS5IYXJlbS5Xby5TMDFlMDMuVW5yYXRlZC5Wb3N0ZnIuMTA4MFAuV2VicmlwLmZyZW5jaC1hbmltZS5jb20ubXA0Ow&ipaddress=1458994159&linkcachekey=a11ce5290&linkoid=652350000&mode=101&sharelink_id=8937710530000&timestamp=1672596833790&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=424f9de729bf31478ba76d51d67a720facd0db67&cachekey=60:1528f339481ce2d8f853bf5b9b71a2ed=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
