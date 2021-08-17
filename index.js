/*
 * userAgent regexp
 */
const Exp_USERAGENT = {
  //browser
  MSIE: /(msie) ([\w.]+)/,
  MOZILLA: /(mozilla)(?:.*? rv:([\w.]+)|)/,
  SAFARI: /(safari)(?:.*version|)[\/]([\d.]+)/,
  CHROME: /(chrome|crios)[\/]([\w.]+)/,
  OPERA: /(opera|opr)(?:.*version|)[\/]([\w.]+)/,
  WEBOS: /(webos|hpwos)[\s\/]([\d.]+)/,
  DOLFIN: /(dolfin)(?:.*version|)[\/]([\w.]+)/, //
  SILK: /(silk)(?:.*version|)[\/]([\w.]+)/, //
  UC: /(uc)browser(?:.*version|)[\/]([\w.]+)/, //
  TAOBAO: /(tao|taobao)browser(?:.*version|)[\/]([\w.]+)/,
  LIEBAO: /(lb)browser(?:.*? rv:([\w.]+)|)/,
  NOKIABROWSER: /(nokiabrowser)[\/]([\d.]+)/,
  //AMAYA:/(amaya)[\/]([\w.]+)/,
  //SEAMONKEY:/(seamonkey)[\/]([\w.]+)/,
  //OMNIWEB:/(omniweb)[\/]v([\w.]+)/,
  //FLOCK:/(flock)[\/]([\w.]+)/,
  //EPIPHANY:/(epiphany)[\/]([\w.]+)/,
  MicroMessenger: /micromessenger/i,//

  //engine
  WEBKIT: /webkit[\/]([\w.]+)/,
  GECKO: /gecko[\/]([\w.]+)/, //
  PRESTO: /presto[\/]([\w.]+)/, //
  TRIDENT: /trident[\/]([\w.]+)/,

  //device
  MAC: /(mac os x)\s+([\w_]+)/, //
  WINNDOWS: /(windows nt)\s+([\w.]+)/, //
  LINUX: /linux/, //
  //IOS : /i(?:pad|phone|pod)(?:.*)cpu(?: iphone)? os/,
  IOS: /(i(?:pad|phone|pod))(?:.*)cpu(?: i(?:pad|phone|pod))? os (\d+(?:[\.|_]\d+){1,})/,
  ANDROID: /(android)\s+([\d.]+)/,
  WINDOWSPHONE: /(windows\s?phone)\s+([\d.]+)/, //
  IPAD: /(ipad).*os\s([\d_]+)/,
  IPHONE: /(iphone\sos)\s([\d_]+)/,
  IPOD: /(ipod)(?:.*)cpu(?: iphone)? os (\d+(?:[\.|_]\d+){1,})/,
  TOUCHPAD: /touchpad/,
  BLACKBERRY: /(playbook|blackberry|bb\d+).*version\/([\d.]+)/,
  RIMTABLET: /rimtablet/, //
  MEEGO: /meego/,//
  BADA: /bada/, //
  CHROMEOS: /cromeos/,//
};
function detect(ua) {
  const os = {},
    //browser
    chrome = ua.match(Exp_USERAGENT.CHROME),
    opera = ua.match(Exp_USERAGENT.OPERA),
    msie = ua.match(Exp_USERAGENT.MSIE),
    safari = (ua + ua.replace(Exp_USERAGENT.SAFARI, ' ')).match(Exp_USERAGENT.SAFARI), //modify the jquery bug
    mozilla = ua.match(Exp_USERAGENT.MOZILLA),
    webos = ua.match(Exp_USERAGENT.WEBOS),
    dolphi = ua.match(Exp_USERAGENT.DOLFIN),
    silk = ua.match(Exp_USERAGENT.SILK),
    uc = ua.match(Exp_USERAGENT.UC),
    taobao = ua.match(Exp_USERAGENT.TAOBAO),
    liebao = ua.match(Exp_USERAGENT.LIEBAO),
    nokiabrowser = ua.match(Exp_USERAGENT.NOKIABROWSER),

    //engine
    webkit = ua.match(Exp_USERAGENT.WEBKIT),
    gecko = ua.match(Exp_USERAGENT.GECKO),
    presto = ua.match(Exp_USERAGENT.PRESTO),
    trident = ua.match(Exp_USERAGENT.TRIDENT),

    //device
    mac = ua.match(Exp_USERAGENT.MAC),
    windows = ua.match(Exp_USERAGENT.WINNDOWS),
    linux = ua.match(Exp_USERAGENT.LINUX),
    chromeos = ua.match(Exp_USERAGENT.CHROMEOS),

    //pad
    ipad = ua.match(Exp_USERAGENT.IPAD),
    rimtablet = ua.match(Exp_USERAGENT.RIMTABLET),
    touchpad = webos && ua.match(Exp_USERAGENT.TOUCHPAD),

    //mobile
    // ios = ua.match(Exp_USERAGENT.IOS),
    ipod = ua.match(Exp_USERAGENT.IPOD),
    iphone = !ipad && ua.match(Exp_USERAGENT.IPHONE),
    android = ua.match(Exp_USERAGENT.ANDROID),
    windowsphone = ua.match(Exp_USERAGENT.WINDOWSPHONE),
    blackberry = ua.match(Exp_USERAGENT.BLACKBERRY),
    meego = ua.match(Exp_USERAGENT.MEEGO),
    bada = ua.match(Exp_USERAGENT.BADA);

  //engine
  if (webkit)
    os.webkit = true;
  if (gecko)
    os.gecko = true;
  if (presto)
    os.presto = true;
  if (trident)
    os.trident = true;
  //device
  os['device'] = {};
  //
  if (mac)
    os.mac = true, os['device']['name'] = 'mac os', os.version = mac[2];
  if (windows)
    os.windows = true, os['device']['name'] = 'window', os.version = windows[2];
  if (linux)
    os.linux = true, os['device']['name'] = 'linux'; //
  if (chromeos)
    os.chromeos = true, os['device']['name'] = 'chromeos', os.version = chromeos[2];
  //if (ios) os.ios=true;//
  if (android)
    os.android = true, os['device']['name'] = 'android', os.version = android[2];
  if (iphone)
    os.ios = true, os.iphone = true, os['device']['name'] = 'iphone', os.version = iphone[2].replace(/_/g, '.'), os.iphone = true;
  if (ipod)
    os.ios = true, os.ipod = true, os['device']['name'] = 'ipod', os.version = ipod[2].replace(/_/g, '.'), os.ipod = true;
  if (ipad)
    os.ios = true, os.ipad = true, os['device']['name'] = 'ipad', os.version = ipad[2].replace(/_/g, '.'), os.ipad = true;
  if (webos)
    os.webos = true, os['device']['name'] = 'webos', os.version = webos[2];
  //
  if (windowsphone)
    os.windowsphone = true, os['device']['name'] = 'windowsphone', os.version = windowsphone[2];
  if (blackberry)
    os.blackberry = true, os['device']['name'] = 'blackberry', os.version = blackberry[2];
  if (meego)
    os.meego = true, os['device']['name'] = 'meego', os.version = '';//
  if (bada)
    os.bada = true, os['device']['name'] = 'bada', os.version = ''; //
  if (rimtablet)
    os.rimtablet = true, os['device']['name'] = 'rimtablet', os.version = ''; //
  if (touchpad)
    os.touchpad = true, os['device']['name'] = 'touchpad', os.version = ''; //
  //os.device.version
  os['device']['version'] = os.version;
  if (!(android || iphone || ipad || ipod || webos || blackberry || meego || bada || rimtablet || touchpad || windowsphone))
    os.desktop = true, os.version = '';
  //browser
  const match = dolphi || silk || uc || msie || taobao || liebao || nokiabrowser || opera || chrome || safari || (ua.indexOf('compatible') < 0 && mozilla) || {};
  //chrome
  match[1] = match[1] === 'crios' ? 'chrome' : match[1];
  //taobao
  match[1] = match[1] === 'tao' ? 'taobao' : match[1];
  //
  os[match[1]] = true;
  os['browser'] = match[1];
  os['version'] = match[2] || '';
  //major
  os['version'] && (os['major'] = parseInt(os['version'], 10));
  //revise
  //safari
  if (os.ios && os.webkit && !os.desktop) {
    try {
      //in node js
      os.safari = (window.canSetSearchEngine || window.TrackEvent) ? true : false;
    } catch (e) { }
    const v = os['major'] || parseInt(os['device-version'], 10) || '';
    v && (os['ios' + v] = true);
  }
  //ie 11
  if (os.trident && os.major >= 11) {
    os.browser = 'msie';
    os.msie = true;
    delete os.mozilla;
  }
  //mozilla/firefox
  if (os.mozilla) {
    os.firefox = true;
  }
  //opera
  if (os.browser === 'opr') {
    os.browser = 'opera';
    os.opera = os.opr;
  }
  //blackberry
  if (os.blackberry) {
    //
    delete os.safari;
  }
  //MicroMessager
  if (Exp_USERAGENT.MicroMessenger.test(ua)) {
    //
    os.micromessage = true;
  }
  //uc
  const DOMWindow = DOMWindow || {};
  if (DOMWindow && DOMWindow.UCNewsJSController) {
    os.uc = true,
      os.browser = 'uc';
  }
  //
  try {
    //orientation
    os.orientation = (window.orientation === 180 || window.orientation === 0) ? 'portrait' : 'landscape';
  } catch (e) { }
  //os.device.type
  if (os.desktop) {
    os.device['type'] = 'desktop';
  } else {
    os.device['type'] = 'mobile';
    os.mobile = true;
  }
  //
  return os;
};
//
const UserAgent = function (useragent) {
  useragent = (useragent || '').toLowerCase();
  //
  return detect(useragent);
};
//
export default async function (ctx, next) {
  const req = ctx.request;
  //
  if (ctx.useragent) {

    return await next();
  }
  //
  const agent = req.headers['user-agent'] || '';
  const ua = new UserAgent(agent);
  //
  ctx.useragent = ua;
  ctx.state.ua = ua;
  //
  return await next();
};