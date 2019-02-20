package com.example.apps_weex;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXLogUtils;

import java.util.HashMap;
import java.util.Map;

public class NextActivity extends Activity  implements IWXRenderListener {
    WXSDKInstance mWXSDKInstance;
    Loading loading;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.next_layout);
//        Button button = (Button)findViewById(R.id.back_btn);
//        button.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                finish();
//            }
//        });
        final TitleBar titleBar = (TitleBar)findViewById(R.id.my_titlebar);
        titleBar.setBackgroundColor(Color.parseColor("#64b4ff"));
//        TitleBar titleBar = new TitleBar(NextActivity.this);
//        titleBar.setHeight(48*2);
        titleBar.setLeftImageResource(R.mipmap.ic_launcher);
        titleBar.setLeftText("返回");
        titleBar.setLeftTextColor(Color.WHITE);
        titleBar.setLeftClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        titleBar.setTitle("主页");
        titleBar.setTitleColor(Color.BLACK);

//        loadingDialog = new Loading(context, R.style.TransparentLoadingDialog); //设置AlertDialog背景透明
//        loadingDialog.setCancelable(false);
//        loadingDialog.setCanceledOnTouchOutside(false);
        loading = new Loading(this,R.style.TransparentDialog);
        loading.setCancelable(false);
        loading.setCanceledOnTouchOutside(false);
        loading.show();
//        Loading.getInstance(this).show();
//        loading = new Loading(NextActivity.this);
//        loading.show();

        initWeex();
//        LoadingDialog loadingDialog = new LoadingDialog(this);
//        loadingDialog.setMessage("loading");
//        loadingDialog.show();

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
        String url = "http://192.168.5.100:8082/dist/index.js";

        if (getIntent().getData() != null) {
            String navUrl = getIntent().getData().toString();
            if (null != navUrl) {
                WXLogUtils.e(navUrl);
                url = navUrl;
            } else {
                WXLogUtils.e("a is null");
            }
        } else {
            WXLogUtils.e("get data is null");
        }

        Map<String,Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL,url);
        mWXSDKInstance.renderByUrl("MainActivity", url, options, null, WXRenderStrategy.APPEND_ASYNC);

    }
    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
//        Loading.getInstance(this).dismiss();
        loading.dismiss();
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
//        Loading.getInstance(this).dismiss();
        Toast.makeText(getApplicationContext(),"sdfs111111af",Toast.LENGTH_LONG).show();
    }
    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        Toast.makeText(getApplicationContext(),"sdfsaf",Toast.LENGTH_LONG).show();
//        Loading.getInstance(this).dismiss();
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Toast.makeText(getApplicationContext(),msg,Toast.LENGTH_LONG).show();
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
