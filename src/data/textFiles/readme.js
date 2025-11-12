const generateRows = () => {
  const rows = [
    {
      title: "Introduction",
      image:
        "https://appstickers-cdn.appadvice.com/1164831016/819286823/18ab4614722102b2a0def24dda1ea4bd-1.gif",
      content: `
      Hi, my name is Noé GUENGANT, and I'm an AI/Data Sciences engineer from France.<br><br>
      You might be wondering "Why is this designed this way ?" (and you'd be right). My personal belief is that in a
      world full of AI vibe coding and far too many candidates for the same position, the best thing you can do is to
      be yourself.
      For me, that means leaning into a bit of an outcast aesthetic and designs that actually stand out. I’ve never done
      anything just to blend in, I want to be remembered, and maybe even inspire the ones who come after me. 
      I know you probably scroll through dozens of portfolios every day, so I’m doing my best to make this one worth
      remembering.
      <br/>
      The inspiration behind this design comes from my parents’ old computer (terrible monitor included), 
      the one that introduced me to the internet and helped shape who I am today. 
      `
    },
    {
      title: "Interests",
      image: "https://blob.gifcities.org/gifcities/YRCVADQ5HCADDZGJS65V5BNAUC2SVGPG.gif",
      content: `
        <ul>
          <li>Data-analytics</li>
          <li>Video-games</li>
          <li>Theater</li>
          <li>Music of all kind</li>
          <li>Unusual aesthetic (if you couldn't guess)</li>
          <li>Geography</li>
          <li>Netherlands</li>
        </ul>
      `
    },
    {
      title: "FAQ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRX6w3EFRXeOcn6IvxIHNU8S7NU-HNKLtJd8CBYvAiuWZzbu0xNDvBFubV",
      content: `
        <ul>
          <li>Why should you consider me?<br>
          I'm eager to learn new things in domains I love and ready to work hard to make it work. I also think that my
          young and foreign vision could benefit you in many ways.
          </li><br>
          <li>Would I fit well with your team?<br>
            Most people depict me as funny and easy going. I'm also always looking for new people to talk to and already
            can't wait to discover more of their culture.
          </li><br>
          <li>Why the netherlands?<br/>I lived 4 months there and felt in love with this country, I'm even trying to
          learn it aside from my lectures (please help what's wrong with de and het).</li><br>
          <li>"How can I contact this amazing candidate?"<br>You'll find all the links you need inside the red
          banner on top of this page!</li>
      `
    },
    {
      title: "Technical stuff",
      image: "http://clipart-library.com/image_gallery/91835.jpg",
      content: `
        I know Python really well, did some projects using React (like this one), I can also manage pretty well C/C++ 
        and Java.<br>I'm also a great teacher; I gave informatics lectures to elders as a volunteer.<br>And finally, I'm
        used to SQL, PostgreSQL, JPQL and other mental illnesses in this style :)
        `
    },
    {
      title: "More",
      image: "https://blob.gifcities.org/gifcities/TMXCY6LXZOM5I234EFPO4QZXURGKDECL.gif",
      content: `
        <ul>
          <li>You'll find more about me in the resume (can be found on the desktop if not automatically opened)</li>
          <li>We had an interschool project where my team and I finished [Still waiting for results]. The rules were
           simple, using a default (useless) model, try to summarize a text in 10-15 words while consuming the less 
           possible. You can find more about it in the start menu: "Favorites -> Projects -> D4G"
          </li>
          <li>I can't wait to hear from you so we can discuss (I'm sure) amazing stuff!</li>
        </ul>
      `
    }
  ];

  return rows
    .map(
      r => `
    <tr>
      <td bgcolor="black" width="80px" align="right">
        <font color="white" id="introduction">
          ${r.title}<br/>
          <img src="${r.image}" style="width: 100%; max-width: 80px; height: auto;" />
        </font>
      </td>
      <td bgcolor="lightgrey">
        ${r.content}
      </td>
    </tr>
  `
    )
    .join("");
};

const marqueeGen = () => {
    return [
        {
            href: "https://www.linkedin.com/in/guengantnoe",
            title: "LinkedIn"
        },
        {href: "mailto:guengant.noe@gmail.com", title: "guengant.noe@gmail.com"},
        {
            href: "tel:+33641462717",
            title: "+33 6 41 46 27 17"
        },
    ]
        .map(
            l => {
                if (l.href.startsWith('http')) {
                    return `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${l.title}</a>`;
                }
                return `<a href="${l.href}">${l.title}</a>`;
            }
        )
        .join(" | ");
};

const readmeHTML = `
<style>
font * {font-family: 'Comic Sans MS' !important;}
blink {
  -webkit-animation: 1s linear infinite condemned_blink_effect; // for android
  animation: 1s linear infinite condemned_blink_effect;
}
@-webkit-keyframes condemned_blink_effect { // for android
  0% {
      visibility: hidden;
  }
  50% {
      visibility: hidden;
  }
  100% {
      visibility: visible;
  }
}
@keyframes condemned_blink_effect {
  0% {
      visibility: hidden;
  }
  50% {
      visibility: hidden;
  }
  100% {
      visibility: visible;
  }
}
</style>
<font size="4" >
  <marquee bgcolor="red" color="white">
    ${marqueeGen()}
  </marquee>
  <table bgcolor="grey" width="100%">
    <thead>
      <tr>
        <td colspan="2" valign="center">
          <font size="7"><b>README</b></font>
        </td>
      </tr>
    </thead>
    <tbody valign="top">
      ${generateRows()}
    </tbody>
    <tfoot valign="top">
      <tr><td>(c)2004</td>
      <td>

      <img align="right" width="200px" src="https://blob.gifcities.org/gifcities/6JM6PYW7EW73JHLX5TBVUNJJXOYZD6OP.gif" />
      </td></tr>
    </tfoot>
  </table>
 </font>
`;

export default readmeHTML;
