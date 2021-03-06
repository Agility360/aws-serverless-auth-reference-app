import { NgModule }                    from '@angular/core';
import { IonicApp,
         IonicModule,
         App,
         NavController,
         LoadingController,
         AlertController }             from 'ionic-angular';
import { MyApp }                       from './app.component';
import { HttpModule, URLSearchParams } from "@angular/http";
import { BrowserTab }                  from '@ionic-native/browser-tab';
import { Deeplinks }                   from '@ionic-native/deeplinks';
import { ComponentsModule }            from '../components/components.module';
import { NavbarComponent }             from '../components/navbar/navbar';

import { AboutPage }                   from '../pages/about/about';
import { AccountConfirmationCodePage } from '../pages/account-confirmation-code/account-confirmation-code';
import { AccountChangePasswordPage }   from '../pages/account-change-password/account-change-password';
import { AccountForgotPasswordPage }   from '../pages/account-forgot-password/account-forgot-password';
import { AccountPage }                 from '../pages/account/account';
import { AccountSigninPage }           from '../pages/account-signin/account-signin';
import { AccountSignupPage }           from '../pages/account-signup/account-signup';
import { TabsPage }                    from '../pages/tabs/tabs';
import { WelcomePage }                 from '../pages/welcome/welcome';
import { BrowserModule }               from '@angular/platform-browser';
import { HttpService }                 from '../services/http-service';
import { HttpServiceIonic1 }           from '../services/http-service-ionic1';
import {
  IamAuthorizerClient,
  CustomAuthorizerClient,
  UserPoolsAuthorizerClient,
  NoAuthorizationClient
} from "../services/api.service";

/* Addded by McDaniel */
/* ------------------------------------------------------- */
/* Added by McDaniel */
import { GlobalStateService } from '../services/global-state.service';

import { Camera } from '@ionic-native/camera';
import { ProfilePage } from '../pages/agility-profile/profile';
import { ProfileEditPage } from '../pages/agility-profile-edit/profile-edit';
import { JobsPage } from '../pages/agility-jobs/jobs';
import { NewsPage } from '../pages/agility-news/news';
import { NotificationsPage } from '../pages/agility-notifications/notifications';
import { CertificationsPage } from '../pages/agility-certifications/certifications';
import { EducationPage } from '../pages/agility-education/education';
import { JobhistoryPage } from '../pages/agility-jobhistory/jobhistory';
import { JobhistoryDetailPage } from '../pages/agility-jobhistory-detail/jobhistory-detail';
import { ResumeUploaderPage } from '../pages/agility-resume-uploader/resume-uploader';
import { EducationDetailPage } from '../pages/agility-education-detail/education-detail';
import { CertificationDetailPage } from '../pages/agility-certification-detail/certification-detail';
import { HttpErrorPage } from '../pages/agility-http-error/http-error';
import { DeleteAccountPage } from '../pages/agility-delete-account/delete-account';
import { PrivacyPolicyPage } from '../pages/agility-privacy-policy/privacy-policy';
import { TermsOfUsePage } from '../pages/agility-terms-of-use/terms-of-use';
import { JobsDetailPage } from '../pages/agility-jobs-detail/jobs-detail';
import { NewsDetailPage } from '../pages/agility-news-detail/news-detail';
import { SettingsPage } from '../pages/agility-settings/settings';

import { ProcessHttpmsgProvider } from '../providers/process-httpmsg';
import { CandidateProvider } from '../providers/candidate';
import { CertificationHistoryProvider } from '../providers/certificationhistory';
import { EducationHistoryProvider } from '../providers/educationhistory';
import { JobHistoryProvider } from '../providers/jobhistory';
import { JobApplicationsProvider } from '../providers/job-applications';
import { WordpressProvider } from '../providers/wordpress';
import { IndustriesProvider } from '../providers/industries';
import { ProfessionsProvider } from '../providers/professions';
import { StatesProvider } from '../providers/states';

import { SafeHtmlPipe } from "../shared/pipe.safehtml";
import { XHRBackend, RequestOptions } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


/* ------------------------------------------------------- */
@NgModule({
  declarations: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSignupPage,
    MyApp,
    TabsPage,
    WelcomePage,
    NavbarComponent,

    ProfilePage,
    ProfileEditPage,
    TabsPage,
    JobsPage,
    NewsPage,
    NotificationsPage,
    CertificationsPage,
    EducationPage,
    JobhistoryPage,
    JobhistoryDetailPage,
    EducationDetailPage,
    CertificationDetailPage,
    ResumeUploaderPage,
    HttpErrorPage,
    DeleteAccountPage,
    PrivacyPolicyPage,
    TermsOfUsePage,
    JobsDetailPage,
    NewsDetailPage,
    SettingsPage,
    SafeHtmlPipe,
    PdfViewerComponent

  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AccountConfirmationCodePage,
    AccountChangePasswordPage,
    AccountForgotPasswordPage,
    AccountPage,
    AccountSigninPage,
    AccountSignupPage,
    MyApp,
    TabsPage,
    WelcomePage,

    ProfilePage,
    ProfileEditPage,
    TabsPage,
    JobsPage,
    NewsPage,
    NotificationsPage,
    CertificationsPage,
    EducationPage,
    JobhistoryPage,
    JobhistoryDetailPage,
    EducationDetailPage,
    CertificationDetailPage,
    ResumeUploaderPage,
    HttpErrorPage,
    DeleteAccountPage,
    PrivacyPolicyPage,
    TermsOfUsePage,
    JobsDetailPage,
    NewsDetailPage,
    SettingsPage

  ],
  providers: [
    GlobalStateService,
    BrowserTab,
    Deeplinks,
    ComponentsModule,
    Camera,
    { provide: HttpServiceIonic1, useClass: HttpServiceIonic1 },
    { provide: HttpService, useClass: HttpService },
    { provide: CustomAuthorizerClient, useClass: CustomAuthorizerClient },
    { provide: IamAuthorizerClient, useClass: IamAuthorizerClient },
    { provide: UserPoolsAuthorizerClient, useClass: UserPoolsAuthorizerClient },
    { provide: NoAuthorizationClient, useClass: NoAuthorizationClient },

     StatusBar,
     SplashScreen,
     CandidateProvider,
      CertificationHistoryProvider,
      EducationHistoryProvider,
      JobHistoryProvider,
      JobApplicationsProvider,
      WordpressProvider,
      IndustriesProvider,
      ProfessionsProvider,
      StatesProvider,
      ProcessHttpmsgProvider
  ]
})
export class AppModule {}
