package com.example.apps_weex;

import android.content.Intent;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.Toast;

import com.example.apps_weex.okhttp.DownloadManager;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

import java.util.HashMap;
import java.util.Map;

import okhttp3.OkHttpClient;

public class MainActivity extends AppCompatActivity  implements IWXRenderListener {
    WXSDKInstance mWXSDKInstance;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button)findViewById(R.id.next_btn);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this,NextActivity.class);
                startActivity(intent);
            }
        });


        DownloadManager downloadManager = new DownloadManager();
        downloadManager.downloadManager();

//       initWeex();
    }

    public void initWeex (){
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        /**
         * WXSample 可以替换成自定义的字符串，针对埋点有效。
         * template 是.we transform 后的 js文件。
         * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
         * jsonInitData 可以为空。
         * width 为-1 默认全屏，可以自己定制。
         * height =-1 默认全屏，可以自己定制。
         */
        //加载文件http://192.168.43.175:8081
//        //.js文件在资源文件Asset下
//        mWXSDKInstance.render("WXSample", WXFileUtils.loadFileOrAsset("dist/index.js", this), null, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);
//        mWXSDKInstance.render("WXSample", WXFileUtils.loadFileOrAsset("dist/index.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);

//        WebView webView = (WebView) findViewById(R.id.wv);
//        webView.loadUrl("http://192.168.5.106:8082/dist/index.js");
        // url 加载
        String url = "http://192.168.5.106:8082/dist/index.js";
        Map<String,Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL,url);
        mWXSDKInstance.renderByUrl("MainActivity", url, options,null, WXRenderStrategy.APPEND_ASYNC);

    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        Toast.makeText(getApplicationContext(),"22222334422",Toast.LENGTH_LONG).show();
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        Toast.makeText(getApplicationContext(),"2222",Toast.LENGTH_LONG).show();
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Toast.makeText(getApplicationContext(),msg,Toast.LENGTH_LONG).show();
        String url = "http://192.168.5.106:8082/dist/index.js";
        Map<String,Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL,url);
        mWXSDKInstance.renderByUrl("MainActivity", url, options, null, WXRenderStrategy.APPEND_ASYNC);

    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }
}