# KISS Password Generator

<img src="https://raw.githubusercontent.com/CedricJaeger/KissPwdGen/e57459f34e09342c1e6b543f251a33c9c40cfda9/pwdgen_logo.svg" style="float: right; width=120px;" alt="KISS Password Generator Logo" width="25%">

## Description
KISS Password Manager is a simple password generator extension for use in Chromium-based browsers like Google Chrome or Microsoft Edge. The password generator provides unique random passwords
for use in conjunction with a password manager.

## Installation
Download it from the [chrome web store](https://chrome.google.com/webstore/detail/kiss-password-generator/namgaoeoniofgipphlkphffaidlndoih) or the [microsoft edge store](https://microsoftedge.microsoft.com/addons/detail/pkmhfpnkjlpanhbgoaceaijgphpinbie).

## Usage
1. Click the KISS Password Generator icon.
1. Select the 'strong' (recommended) or the 'weak' password.
1. Copy-paste the password where needed!

## Screenshot
![Screenshot of KISS Password Generator](https://github.com/CedricJaeger/KissPwdGen/blob/69510333aed971c0bfc30c07a09231ebe4e6729f/pwdgen_screenshot.png "Screenshot")

## Contributing
Contributions aren't expected. Fork the project instead.

## Licenses
The javascript code, html files, json files, css files are published under [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
The vector (svg files) and raster images (png files) are in the [public domain](https://creativecommons.org/publicdomain/zero/1.0/).

## Privacy
This extension :
* doesn't access, collect or transmit any personal information.
* doesn't require browser's permissions.
* runs exclusively in the context of the browser. 
* uses only ressources packed with the extension.
* doesn't connect to third party services or websites.
* doesn't contain ads, adware, marketing or sponsored content.

## Further considerations
### What does KISS means?
[Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle). This extension tries to keep the things simple and minimal.

>  « Il semble que la perfection soit atteinte non quand il n'y a plus rien à ajouter, mais quand il n'y a plus rien à retrancher »
>
> -- <cite><a href="https://fr.wikipedia.org/wiki/Terre_des_hommes">Terre des hommes</a></cite> d'Antoine de Saint-Exupéry

### Why another password generator?
Most password generators offer way too many unneeded functionalities: customizable charset, password's length, etc. On the other hand, this password generator uses some presets to define a 'strong' password and a 'weak' password. Each time the extension is activated it will generate two passwords, that's all! Moreover your password is only 2 clicks away, you just have to copy-paste it!

### How are passwords generated?
Password are generated using the [window.crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) JavaScript function, which provides a pseudo-random number generator suitable for cryptographic purposes.
Then the random numbers are mapped on a set of printable characters.

### What's a 'strong' password?
A 'strong' password in this extension is a password between 32 and 48 characters using a lot of the [ASCII](https://en.wikipedia.org/wiki/ASCII) printable alphanumeric characters and symbols (excluding the ASCII Extended characters).

### What's a 'weak' password?
A 'weak' password in this extension is a password between 8 and 16 characters using only the [ASCII](https://en.wikipedia.org/wiki/ASCII) alphanumeric characters.

### Why is a 'weak' password offered?
Sadly many websites are imposing absurd limitations on the passwords, for many reasons:
* The password validator imposes some restrictions, because copying the example of the first Google's result is the best way to fulfill the job in a timely and clever manner.
* A Website storing the password in clear text, a really poor security practice, need a field that support the length and the character encoding of the password. But at the end of the day, who sees your database?
* It's a [good](https://owasp.org/www-community/attacks/SQL_Injection) idea to sanitize passwords inputs and then concatenate this in a SQL Query instead of using parameterized queries.

Don't use them if you can avoid those passwords and think twice before using services, when a website imposes to rely on a weak password.

### How strong are the generated passwords?
The password's entropy is high enough in order to protect against brute force, dictionary or hybrid attacks using hardware available at the time of writing (2021). But how strong a password is, depends on many other aspects:
* Is the [password reused](https://www.google.com/search?q=password+reuse) on different services?
* Does the website use a [proper cryptographic function](https://en.wikipedia.org/wiki/PBKDF2) to hash the password`s or an [improper one](https://en.wikipedia.org/wiki/MD5)?
* Is the password [protected during the transport](https://en.wikipedia.org/wiki/Transport_Layer_Security)?
* How safe are the computers you're using? Do they have malicious spying software already running on them? Are the computer shared with others (and possibly a bad actor) through virtualization, which may allow [side-channel attacks](https://en.wikipedia.org/wiki/Side-channel_attack)?
* Who are the actors acting against you? The [neighbor's kid](https://en.wikipedia.org/wiki/Script_kiddie) or a state sponsored spies and hackers ([NSA](https://www.nsa.gov/), [FSB](http://fsb.ru/), [DGSE](https://www.defense.gouv.fr/dgse), [BND](https://www.bnd.bund.de/), [国家安全部](https://www.12339.gov.cn/), ...)?
* ...

### Why doesn't the extension use Unicode printable characters (greek, hebrew, arabic, chinese, japanese, thai, cyrillic, ...) or even emojis?
It would be fun! But the entropy is already good enough with all those almost latin characters. And during testing very few websites allows such an extended set of characters.

### Why isn't the password automatically copied to the clipboard?
Writing to the [clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) requires the "clipboard-write" permission. In order to keep the extension and it's permissions as lean as possible, the user will have to manually copy the password into the clipboard (using a keyboard shortcut or the contextual menu).

### Why doesn't this extension provide more functionalities?
[YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)!

### Why should I trust this extension? 
The honest answer: "*You should not!*". My threat model is probably not yours. The code is open sourced and published under a free license, so feel free to tweak it to your needs.
