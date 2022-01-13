function FindProxyForURL(url, host) {
    if (shExpMatch(host,"*google*") || shExpMatch(host,"*twitter*") || shExpMatch(host,"*twing*") || shExpMatch(host,"*wikipedia*") || shExpMatch(host,"*youtube*")) { return "HTTPS carclasses.us:443"; } else { return "DIRECT"; }
}
