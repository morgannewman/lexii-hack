const MOCK_DATA = {
  images: [
    {
      id: "IWZX30xASYQ",
      links: { html: "https://unsplash.com/@rparmly" },
      description:
        "white and black ceramic mug filled with brown latte on round black ceramic saucer",
      regular:
        "https://images.unsplash.com/photo-1436491911682-72ab1d398f59?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=c00f79f97390498584abbdc82f491f1d",
      user: {
        portfolio_url: "http://rossparmly.com",
        username: "rparmly"
      },
      thumb:
        "https://images.unsplash.com/photo-1436491911682-72ab1d398f59?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=209dac3cf6e47f1857fb849b340b6c7a"
    },
    {
      id: "1qYH8t8Q5mE",
      links: { html: "https://unsplash.com/@shapeofshape" },
      description: null,
      regular:
        "https://images.unsplash.com/photo-1521508599200-83e3c5d60efb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=df04fce9243babd357721f19c8a18962",
      user: {
        portfolio_url: "http://shapeofshape@tumblr.com",
        username: "shapeofshape"
      },
      thumb:
        "https://images.unsplash.com/photo-1521508599200-83e3c5d60efb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=2f3859ceb4cddf0e048231309b4048dc"
    },
    {
      id: "0FtWjW6-FPg",
      links: { html: "https://unsplash.com/@bensow" },
      description: "red and gray Dreams food van parked in front of building",
      regular:
        "https://images.unsplash.com/photo-1531194242070-23c1ed054ead?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=510cd27924b94ed7f2694f0f016be80e",
      user: {
        portfolio_url: "http://instagram.com/bensow.jpg",
        username: "bensow"
      },
      thumb:
        "https://images.unsplash.com/photo-1531194242070-23c1ed054ead?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=d1c7abc8488cfcda51162e521fd79193"
    },
    {
      id: "00Rz7t0UL9I",
      links: { html: "https://unsplash.com/@valferronit" },
      description: "meat with vegetables and mustard on dish",
      regular:
        "https://images.unsplash.com/photo-1516557977083-86bf43fe24ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=ea13a8903ac020564af6dcd45c9c9b32",
      user: {
        portfolio_url: "https://www.ronitvalfer.com",
        username: "valferronit"
      },
      thumb:
        "https://images.unsplash.com/photo-1516557977083-86bf43fe24ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=cf1c851e9f01ca135218102818151e93"
    },
    {
      id: "GL6J_sFYHLw",
      links: { html: "https://unsplash.com/@yuiizaa" },
      description: null,
      regular:
        "https://images.unsplash.com/photo-1524483143868-ca3000f0489a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=8b94311c60e70ca30d4039b88f5bdccb",
      user: {
        portfolio_url: "https://www.facebook.com/yuiizaa.sep",
        username: "yuiizaa"
      },
      thumb:
        "https://images.unsplash.com/photo-1524483143868-ca3000f0489a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=adf6f979ab00770b8245516dc4821253"
    },
    {
      id: "6ePuSf5Wago",
      links: { html: "https://unsplash.com/@chuklanov" },
      description: "man using computer",
      regular:
        "https://images.unsplash.com/photo-1526698905402-e13b880ad864?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=4f52e9b0645b51a9b6f4a5385ab6a301",
      user: {
        portfolio_url: "http://www.chuklanov.com",
        username: "chuklanov"
      },
      thumb:
        "https://images.unsplash.com/photo-1526698905402-e13b880ad864?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=bf27451db18449c65b0103fd32d3f99a"
    },
    {
      id: "HGkNrWY189E",
      links: { html: "https://unsplash.com/@sebastianpoc" },
      description: "man making fire with grass",
      regular:
        "https://images.unsplash.com/photo-1526140684821-ac7437ed8349?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=51e5155486220d9c9082a733ed1f22ea",
      user: {
        portfolio_url: "http://sebastianpoc.myportfolio.com",
        username: "sebastianpoc"
      },
      thumb:
        "https://images.unsplash.com/photo-1526140684821-ac7437ed8349?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=e6ff6ad7a7812b8d30a7c9aa0d095f4a"
    },
    {
      id: "1jmCYN1a_Q0",
      links: { html: "https://unsplash.com/@20ymn17" },
      description: "several cactus plants in macro photography",
      regular:
        "https://images.unsplash.com/photo-1501625875319-dea7d344cda5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=87e5f4edf414fc30925757cf5ca786c7",
      user: { portfolio_url: null, username: "20ymn17" },
      thumb:
        "https://images.unsplash.com/photo-1501625875319-dea7d344cda5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=ef287fca78a22b1047c4cac96b5362e3"
    },
    {
      id: "lUGWwDAWpEk",
      links: { html: "https://unsplash.com/@drscythe" },
      description: "silhouette photo of flying airplane",
      regular:
        "https://images.unsplash.com/photo-1484830020404-9ce1fd56fdf9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=802edda106bb37fd462c4f0662d98d59",
      user: {
        portfolio_url: "https://www.youtube.com/c/drscythe",
        username: "drscythe"
      },
      thumb:
        "https://images.unsplash.com/photo-1484830020404-9ce1fd56fdf9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=190884ed8d777acda462f4f85120a956"
    },
    {
      id: "_TMzs6SJZHY",
      links: { html: "https://unsplash.com/@agebarros" },
      description: null,
      regular:
        "https://images.unsplash.com/photo-1519482012999-d984ed6474d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=152af223694b8a3016d88d32312f5710",
      user: {
        portfolio_url: "http://www.agebarros.com",
        username: "agebarros"
      },
      thumb:
        "https://images.unsplash.com/photo-1519482012999-d984ed6474d1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQxMTE4fQ&s=20ac91d2a91a3c0f31bd41d269caebc2"
    }
  ]
};

export default MOCK_DATA;
