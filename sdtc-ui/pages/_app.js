import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive">
        {`console.log('hi');var MemberSpace = window.MemberSpace || {"subdomain":"onrender"};
(function(d){
  var s = d.createElement("script");
  s.src = "https://cdn.memberspace.com/scripts/widgets.js";
  var e = d.getElementsByTagName("script")[0];
  e.parentNode.insertBefore(s,e);
}(document));
      `}
      </Script>
      <div>sdtc</div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
