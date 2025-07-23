function FindProxyForURL(u,h){
    var p="SOCKS5 127.0.0.1:10808";
    var d=atob("ZGlzY29yZC5jb20sZGlzY29yZGFwcC5jb20sZGlzY29yZC5nZyxkaXNjb3JkYXBwLm5ldCxkaXNjb3JkLm1lZGlhLGRpc2NvcmRzdGF0dXMuY29tLGRpc2NvcmQudG9vbHMsZGlzY29yZC5jbyxkaXNjb3JkY2RuLmNvbSxjZG4uZGlzY29yZGFwcC5jb20sbWVkaWEuZGlzY29yZGFwcC5uZXQsc3RhdHVzLmRpc2NvcmQuY29tLHN1cHBvcnQuZGlzY29yZC5jb20sdXMtY2VudHJhbDEudm9pY2UuZGlzY29yZC5tZWRpYSx1cy13ZXN0MS52b2ljZS5kaXNjb3JkLm1lZGlhLGV1LWNlbnRyYWwxLnZvaWNlLmRpc2NvcmQubWVkaWEsYXAtc291dGhlYXN0MS52b2ljZS5kaXNjb3JkLm1lZGlhLGJyYXppbDEudm9pY2UuZGlzY29yZC5tZWRpYSxkaXMuZ2QsZGlzY29yZC5naWZ0LGRpc2NvcmQuZ2lmdHMsZGlzY29yZC5uZXcsZGlzY29yZC5kZXYsZGlzY29yZC5zdG9yZSxkaXNjb3JkLWFjdGl2aXRpZXMuY29tLGRpc2NvcmRjdGl2aXRpZXMuY29tLGRpc2NvcmRtZXJjaC5jb20sZGlzY29yZHBhcnR5Z2FtZXMuY29tLGRpc2NvcmRzYXlzLmNvbQ==").split(",");
    for(var i=0;i<d.length;i++){
        var x=d[i];
        if(dnsDomainIs(h,x)||shExpMatch(h,"*."+x)){return p;}
    }
    return "DIRECT";
}
