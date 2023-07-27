
// function WebPlayback() {
//   const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
//   const REDIRECT_URI = 'http://localhost:5173/callback'
//   const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
//   const RESPONSE_TYPE = "token"

// }




// import { useEffect, useState } from 'react'

// function WebPlayback() {
//   const [error, setError] = useState(null);
//   const [player, setPlayer] = useState<Spotify.Player | undefined>(undefined);

//   var scope = "streaming \
//   user-read-email \
//   user-read-private"

//   // var generateRandomString = function (length) {
//   //   var text = '';
//   //   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   //   for (var i = 0; i < length; i++) {
//   //     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   //   }
//   //   return text;
//   // };

//   // var state = generateRandomString(16);

//   var auth_query_parameters = new URLSearchParams({
//     response_type: "code",
//     client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
//     scope: scope,
//     redirect_uri: "http://localhost:5173/callback",
//     // state: state
//   })

//   res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());

//   useEffect(() => {
//     fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then((jsonifiedResponse) => {
//         setTopStories(jsonifiedResponse.results)
//         setIsLoaded(true)
//       })
//       .catch((error) => {
//         setError(error)
//         setIsLoaded(true)
//       });
//   }, [])
// }

// useEffect(() => {

//   const script = document.createElement("script");
//   script.src = "https://sdk.scdn.co/spotify-player.js";
//   script.async = true;

//   document.body.appendChild(script);

//   window.onSpotifyWebPlaybackSDKReady = () => {

//     const spotifyPlayer = new window.Spotify.Player({
//       name: 'Web Playback SDK',
//       getOAuthToken: cb => { cb(import.meta.env.VITE_SPOTIFY_CLIENT_ID); },
//       volume: 0.5
//     });

//     setPlayer(spotifyPlayer);

//     player?.addListener('ready', ({ device_id }) => {
//       console.log('Ready with Device ID', device_id);
//     });

//     player?.addListener('not_ready', ({ device_id }) => {
//       console.log('Device ID has gone offline', device_id);
//     });


//     player?.connect();

//   };
// }, []);

// return (
//   <>
//     <div className="container">
//       <div className="main-wrapper">

//       </div>
//     </div>
//   </>
// );
// }

// export default WebPlayback;