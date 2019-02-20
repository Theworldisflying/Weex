package com.example.apps_weex.module;

import android.app.Activity;
import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.widget.Toast;

import com.example.apps_weex.CustomActivity;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;
import java.util.Map;

public class MyModule extends WXModule {
    @JSMethod(uiThread = false)
    public void printlog(String msg){
        Toast.makeText(mWXSDKInstance.getContext(),msg,Toast.LENGTH_LONG).show();
    }
    @JSMethod(uiThread = false)
    public void getToken(String params, JSCallback jsCallback){
        Map<String,String> map = new HashMap<>();
        map.put("token","token=====1");
        map.put("SITEID","1");
        jsCallback.invoke(map);
    }
//    跳转默认活动
    @JSMethod(uiThread = false)
    public void pushDefaultActivity(String url){
//        隐式启动 activity
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.addCategory(Intent.CATEGORY_DEFAULT);
//        在AndroidManifest中声明活动时com.xianyu.android.intent.category.WEEX 要唯一，否则有多个时，会跳出选择框
//        com.xianyu1.android.intent.category.WEEX  代表要跳转的活动
        intent.addCategory("com.xianyu.android.intent.category.WEEX");
        Activity activity = (Activity) mWXSDKInstance.getContext();
        intent.setData(Uri.parse(url));
        activity.startActivity(intent);
    }
//     跳转指定的活动
    @JSMethod(uiThread = false)
    public void pushActivity(String url, String categoty) {
        //        隐式启动 activity
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.addCategory(Intent.CATEGORY_DEFAULT);
//        在AndroidManifest中声明活动时com.xianyu.android.intent.category.WEEX 要唯一，否则有多个时，会跳出选择框
//        com.xianyu1.android.intent.category.WEEX  代表要跳转的活动
        intent.addCategory(categoty);
        Activity activity = (Activity) mWXSDKInstance.getContext();
        intent.setData(Uri.parse(url));
        activity.startActivity(intent);
    }
}
