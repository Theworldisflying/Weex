//
//  LImageLoader.m
//  WkWebViewAndH5
//
//  Created by miu_wen on 2018/12/19.
//  Copyright © 2018 miu_wen. All rights reserved.
//

#import "LImageLoader.h"
#import <WeexSDK/WeexSDK.h>


#import <AFNetworking.h>

#import <SDWebImage/UIImageView+WebCache.h>

#if OS_OBJECT_USE_OBJC
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q)
#define WXDispatchQueueSetterSementics strong
#else
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q) (dispatch_release(q))
#define WXDispatchQueueSetterSementics assign
#endif

@interface LImageLoader()<WXImgLoaderProtocol,WXImageOperationProtocol>
///AFHTTPSessionManager
@property (nonatomic, strong) AFHTTPSessionManager *sessionManager;
///下载任务
@property (nonatomic, strong) NSURLSessionDataTask *dataTask;

///sd_web
@property (WXDispatchQueueSetterSementics, nonatomic) dispatch_queue_t ioQueue;

@end

@implementation LImageLoader
//#pragma mark--
//#pragma mark--AFN
//- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void(^)(UIImage *image,  NSError *error, BOOL finished))completedBlock {
//    self.dataTask = [self.sessionManager GET:url parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
//        NSData *imageData = responseObject;
//        UIImage *image = [UIImage imageWithData:imageData];
//        //      设置图片的大小
//        if (image&&!CGRectEqualToRect(imageFrame, CGRectZero)) {
//            //         开启图片上下文
//            UIGraphicsBeginImageContext(imageFrame.size);
//            //          绘制图片
//            [image drawInRect:imageFrame];
//            //          取出图片
//            image = UIGraphicsGetImageFromCurrentImageContext();
//            //          关闭图形上下文
//            UIGraphicsEndImageContext();
//        }
//        //      成功回调
//        completedBlock(image,nil,YES);
//    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
//        //      失败回调
//        completedBlock(nil,error,YES);
//    }];
//    return self;
//}
//- (void)cancel {
//    //  取消下载任务
//    [self.dataTask cancel];
//}
//- (AFHTTPSessionManager *)sessionManager {
//    if (!_sessionManager) {
//        _sessionManager = [AFHTTPSessionManager manager];
//        _sessionManager.responseSerializer = [AFHTTPResponseSerializer serializer];
//    }
//    return _sessionManager;
//}


#pragma mark--
#pragma mark------sd
#pragma mark -
#pragma mark WXImgLoaderProtocol
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock{
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] loadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize,NSInteger expectedSize, NSURL * _Nullable targetURL){
        NSData *imageData = [NSData dataWithContentsOfURL:targetURL];
        UIImage *image = [UIImage imageWithData:imageData];
        //      设置图片的大小
        if (image&&!CGRectEqualToRect(imageFrame, CGRectZero)) {
            //         开启图片上下文
            UIGraphicsBeginImageContext(imageFrame.size);
            //          绘制图片
            [image drawInRect:imageFrame];
            //          取出图片
            image = UIGraphicsGetImageFromCurrentImageContext();
            //          关闭图形上下文
            UIGraphicsEndImageContext();
        }
        //      成功回调
        completedBlock(image,nil,YES);
    } completed:^(UIImage *_Nullable image, NSData * _Nullable data,NSError * _Nullable error,SDImageCacheType cacheType,BOOL finished, NSURL *_Nullable imageURL) {
        if (completedBlock) {
            
            completedBlock(image, error, finished);
            
        };
    }];
}

- (void)cancel{
    [[SDWebImageManager sharedManager]cancelAll];
}


@end
