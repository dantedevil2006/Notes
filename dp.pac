function FindProxyForURL(url, host) {
    var proxy = "SOCKS5 127.0.0.1:10808"; // or use PROXY for HTTP proxies

    var discordDomains = [
        // Core domains
        "discord.com", "discordapp.com", "discord.gg", "discordapp.net", "discord.media",
        "discordstatus.com", "discord.tools", "discord.co",
        "discordcdn.com", "cdn.discordapp.com", "media.discordapp.net",
        "status.discord.com", "support.discord.com",
        // Voice domains (regional)
        "us-central1.voice.discord.media",
        "us-west1.voice.discord.media",
        "eu-central1.voice.discord.media",
        "ap-southeast1.voice.discord.media",
        "brazil1.voice.discord.media",
        // Shortlinks and promo
        "dis.gd", "discord.gift", "discord.gifts",
        "discord.new", "discord.dev", "discord.store",
        // Experimental & Events
        "discord-activities.com", "discordactivities.com",
        "discordmerch.com", "discordpartygames.com",
        "discordsays.com"
    ];

    for (var i = 0; i < discordDomains.length; i++) {
        var domain = discordDomains[i];
        if (dnsDomainIs(host, domain) || shExpMatch(host, "*." + domain)) {
            return proxy;
        }
    }

    return "DIRECT";
}
