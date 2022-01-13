function FindProxyForURL(url, host) {
    if (shExpMatch(host,"*google*") || shExpMatch(host,"*twitter*") || shExpMatch(host,"*twing*") || shExpMatch(host,"*wikipedia*") || shExpMatch(host,"*youtube*")) { return "HTTPS employee-ru.tlsext.com:10799"; } else { return "DIRECT"; }
}
