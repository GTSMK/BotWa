const axios = require("axios")
const cheerio = require('cheerio')
const FormData = require('form-data');
const fetch = require('node-fetch')


// <===== Ai =====>
/*
Code DeepAi
Base : https://deepai.org
Req Dari : Mr.Unkown 404(Ngeri Bgt jir)

Req Ke : 6289699606658


Cara pake :
let img = await text2img('a dog')
console.log(img)

let chat = await chat('1+1=')
console.log(chat)
*/

async function text2img(prompt) {
    try {
        let data = new FormData();
        data.append('text', prompt);
        data.append('image_generator_version', 'hd');
        data.append('use_old_model', 'false');
        data.append('turbo', 'true');
        data.append('genius_preference', 'classic');

        let {
            apikey,
            agent
        } = genApi()
        let res = await axios.post('https://api.deepai.org/api/text2img', data, {
            headers: {
                'User-Agent': agent,
                'api-key': apikey
            }
        })
        return res.data
    } catch (e) {
        throw e
    }
}

async function chat(prompt) {
    try {
        let data = new FormData();
        data.append('chat_style', 'chat');
        data.append('chatHistory', `[{"role":"user","content": "${prompt}"}]`);
        data.append('model', 'standar') //bisa diganti pke standar,turbo,online

        let {
            apikey,
            agent
        } = genApi()
        let res = await axios.post('https://api.deepai.org/hacking_is_a_serious_crime', data, {
            headers: {
                'User-Agent': agent,
                'api-key': apikey
            }
        })
        return res.data
    } catch (e) {
        throw e
    }
}

function genApi() {
    let userAgent = `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/${Math.floor(Math.random() * 700) + 500}.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 20) + 60}.0.3163.100 Safari/${Math.floor(Math.random() * 20) + 60}.36`;
    let myrandomstr = Math.round((Math.random() * 100000000000)) + "";
    const myhashfunction = function() {
        for (var a = [], b = 0; 64 > b;)
            a[b] = 0 | 4294967296 * Math.sin(++b % Math.PI);
        return function(c) {
            var d, e, f, g = [d = 1732584193, e = 4023233417, ~d, ~e],
                h = [],
                l = unescape(encodeURI(c)) + "\u0080",
                k = l.length;
            c = --k / 4 + 2 | 15;
            for (h[--c] = 8 * k; ~k;)
                h[k >> 2] |= l.charCodeAt(k) << 8 * k--;
            for (b = l = 0; b < c; b += 16) {
                for (k = g; 64 > l; k = [f = k[3], d + ((f = k[0] + [d & e | ~d & f, f & d | ~f & e, d ^ e ^ f, e ^ (d | ~f)][k = l >> 4] + a[l] + ~~h[b | [l, 5 * l + 1, 3 * l + 5, 7 * l][k] & 15]) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][4 * k + l++ % 4]) | f >>> -k), d, e])
                    d = k[1] | 0, e = k[2];
                for (l = 4; l;)
                    g[--l] += k[l]
            }
            for (c = ""; 32 > l;)
                c += (g[l >> 3] >> 4 * (1 ^ l++) & 15).toString(16);
            return c.split("").reverse().join("")
        }
    }();
    const tryitApiKey = 'tryit-' + myrandomstr + '-' + myhashfunction(userAgent + myhashfunction(userAgent + myhashfunction(userAgent + myrandomstr + 'suditya_is_a_smelly_hacker')));
    return {
        apikey: tryitApiKey,
        agent: userAgent
    }
}

async function muslimai(query) {
    const searchUrl = 'https://www.muslimai.io/api/search';
    const searchData = {
        query: query
    };
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const searchResponse = await axios.post(searchUrl, searchData, { headers: headers });
 
        const passages = searchResponse.data.map(item => item.content).join('\n\n');
 
        const answerUrl = 'https://www.muslimai.io/api/answer';
        const answerData = {
            prompt: `Use the following passages to answer the query to the best of your ability as a world class expert in the Quran. Do not mention that you were provided any passages in your answer: ${query}\n\n${passages}`
        };
 
        const answerResponse = await axios.post(answerUrl, answerData, { headers: headers });
 
        const result = {
            answer: answerResponse.data,
            source: searchResponse.data
        };
 
        return result;
    } catch (error) {
        return error
        console.error('Error occurred:', error.response ? error.response.data : error.message);
    }
}

// <===== Download =====>
function extractId(url) {
  const match = url.match(/(?:\/s\/|surl=)([\w-]+)/);
  return match ? match[1] : null;
}

async function terabox(url) {
  const id = extractId(url);
  if (!id) {
    throw new Error("ID tidak valid atau tidak ditemukan dalam URL.");
  }

  let config = {
    method: 'GET',
    url: `https://api.sylica.eu.org/terabox/?id=${id}`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
      'accept-language': 'id-ID',
      'referer': 'https://www.kauruka.com/',
      'origin': 'https://www.kauruka.com',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
      'priority': 'u=0',
      'te': 'trailers'
    }
  };

  try {
    const api = await axios.request(config);

    if (api.data?.data?.message) {
      delete api.data.data.message;
    }

    return { data: api.data, download: `https://api.sylica.eu.org/terabox/v2/?s=${id}` };
  } catch (error) {
    throw new Error(`Gagal mengambil data: ${error.message}`);
  }
}


/*
Code Nhentai Search
Base : https://nhentai.net
Req Dari : Abi

Req Ke : 6289699606658


Cara pake :
let res = await nhentaiSearch('Yuusha')
console.log(res)

async function nhentaiSearch(query) {
try {
const { data } = await axios.get('https://nhentai.net/search/?q=' + query)
const $ = cheerio.load(data)
const result = []

$('.gallery').each((i, el) => {
result.push({
title: $(el).find('.caption').text().trim(),
thumb: $(el).find('.lazyload').attr("data-src").trim(),
link: 'https://nhentai.net'+$(el).find('a').attr("href").trim(),
})
})

return result
} catch (err) {
throw err
}
} */


/*
Code NhentaiDL
Base : https://nhentai.net
Req Dari : Abi

Req Ke : 6289699606658


Cara pake :
let res = await nhentaiDL(12345)
console.log(res)



async function nhentaiDL(code) {
try {
const html = (await axios.get('https://nhentai.net/g/' + code)).data
const match = html.match(/JSON\.parse\((['"`])(.+?)\1\)/)

const $ = cheerio.load(html)
let images = []
$('.thumb-container').each((i, el) => {
let url = $(el).find('.lazyload').attr('data-src').replace('https://t', 'https://i').replace((i + 1) + 't', (i + 1));
images.push(url);
});
if(match) {
let json = match[2].replace(/\\"/g, '"').replace(/\\u([\dA-Fa-f]{4})/g, (m, g) => String.fromCharCode(parseInt(g, 16)))
let data = JSON.parse(json)
data.images.pages = images
data.images.cover = $('meta[itemprop="image"]').attr('content')
data.images.thumbnail = data.images.cover.replace('cover', 'thumb')
data.tags = data.tags.map(tags => tags.name)

return data
}

} catch (err) {
throw err
}
} */


async function mediaFire(url) {
  try {
    const response = await fetch('https://r.jina.ai/' + url);
    const text = await response.text();

    const result = {
      title: (text.match(/Title: (.+)/) || [])[1]?.trim() || '',
      link: (text.match(/URL Source: (.+)/) || [])[1]?.trim() || '',
      filename: '',
      url: '',
      size: '',
      repair: ''
    };

    if (result.link) {
      const fileMatch = result.link.match(/\/([^\/]+\.zip)/);
      if (fileMatch) result.filename = fileMatch[1];
    }

    const matches = [...text.matchAll(/\[(.*?)\]\((https:\/\/[^\s]+)\)/g)];
    for (const match of matches) {
      const desc = match[1].trim();
      const link = match[2].trim();
      
      if (desc.toLowerCase().includes('download') && desc.match(/\((\d+(\.\d+)?[KMGT]B)\)/)) {
        result.url = link;
        result.size = (desc.match(/\((\d+(\.\d+)?[MG]B)\)/) || [])[1] || '';
      }
      if (desc.toLowerCase().includes('repair')) {
        result.repair = link;
      }
    }

    return result;
  } catch (error) {
    return { error: error.message };
  }
}

// <===== Tools =====>

let key = 'OPSIONAL'
let url = `https://ai.xterm.codes/api/audioProcessing/transcribe?key=${key}`

async function transcribe(buffer) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      body: buffer
    })
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    let result = await response.json()
    return result
}

module.exports = { muslimai, mediaFire, text2img, chat, transcribe, terabox }