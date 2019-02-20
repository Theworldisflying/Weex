package com.example.apps_weex.module;

public class HtmlEncode {
    public static String htmlEntityDecode(String string){
        string = string.replace("&quot;", "\"");
        string = string.replace("&apos;","'");
        string = string.replace("&lt;","<");
        string = string.replace("&gt;",">");
        string = string.replace("&amp;","&");
        return string;
    }
}
