package com.example.apps_weex;

import android.app.Application;
import android.content.Context;

import com.example.apps_weex.adapter.ImageAdapter;
import com.example.apps_weex.module.MyComponent;
import com.example.apps_weex.module.MyModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {
    public static Context context;
    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
        try {
            // 注册扩展 Module
            WXSDKEngine.registerModule("WXEventModule", MyModule.class);
//            注册自定义组件 webview
            WXSDKEngine.registerComponent("customwebview", MyComponent.class);
        }catch (WXException e){
            e.printStackTrace();
        }

//okhttp 获得一个全局的Context对象
        context = this;

    }
}
