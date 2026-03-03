# 🎓 Öğrenci Kayıt Sistemi

Bu proje, **ABP.IO Framework**, **Angular** ve **DevExpress DataGrid** kullanılarak geliştirilmiş katmanlı mimariye sahip bir öğrenci kayıt uygulamasıdır.

---

## 🎯 Projenin Amacı

Bu proje aşağıdaki konuları göstermek amacıyla geliştirilmiştir:

- ABP.IO ile katmanlı mimari kullanımı
- Clean Architecture prensiplerine uygun yapı
- Generic `CrudAppService` ile hızlı CRUD geliştirme
- Entity → DTO dönüşümü (AutoMapper)
- EF Core ile ilişkisel veri yönetimi
- Angular ile REST API entegrasyonu
- DevExpress Grid ile gelişmiş tablo yönetimi

---

## 🚀 Kullanılan Teknolojiler

| Katman | Teknoloji |
|--------|-----------|
| Backend | ABP.IO (ASP.NET Core 9) |
| Frontend | Angular 20 |
| Veritabanı | SQL Server |
| ORM | Entity Framework Core |
| UI Bileşenleri | DevExpress DataGrid |
| Kimlik Doğrulama | OpenIddict (ABP yerleşik) |
| API Dokümantasyon | Swagger |

---
<img width="1914" height="335" alt="Ekran görüntüsü 2026-03-03 162233" src="https://github.com/user-attachments/assets/f0f842c7-647f-4241-b2ae-9584019c58eb" />
<img width="1915" height="426" alt="Ekran görüntüsü 2026-03-03 162225" src="https://github.com/user-attachments/assets/1775a01b-35e2-455a-ba72-6e5ba1efb51e" />

## 🧱 Mimari Yapı

Proje ABP.IO’nun önerdiği katmanlı mimariye uygun olarak geliştirilmiştir:

Domain → Application → Infrastructure → API → Angular UI

### 🔹 Domain Katmanı
- Temel iş varlıkları (Student, Department)
- Entity tanımları

### 🔹 Application Katmanı
- Application Service’ler
- DTO tanımları
- AutoMapper mapping işlemleri
- İş kuralları

### 🔹 EntityFrameworkCore Katmanı
- DbContext
- Migration yönetimi
- Veritabanı konfigürasyonu

### 🔹 HttpApi Katmanı
- REST endpoint’leri
- ABP tarafından otomatik oluşturulan API’ler

### 🔹 Angular UI
- DevExpress DataGrid
- Popup form yapısı
- ABP RestService ile API iletişimi

---
## 🔗 Navigation Property Yükleme

Navigation property yükleme işlemi:

```csharp
Repository.WithDetails(x => x.Department);


📋 Özellikler
✅ Bölüm Yönetimi

Listeleme

Ekleme

Güncelleme

Silme

✅ Öğrenci Yönetimi

Listeleme (Bölüm adı ile birlikte)

Ekleme

Güncelleme

Silme

✅ Teknik Özellikler

CrudAppService ile boilerplate kod azaltımı

AutoMapper ile Entity ↔ DTO dönüşümü

EF Core Migration yönetimi

JWT tabanlı kimlik doğrulama

Swagger ile interaktif API test imkanı

DevExpress Grid entegrasyonu

🏗️ Proje Yapısı
StudentRegistration/
├── src/
│   ├── StudentRegistration.Domain
│   ├── StudentRegistration.Domain.Shared
│   ├── StudentRegistration.Application.Contracts
│   ├── StudentRegistration.Application
│   ├── StudentRegistration.EntityFrameworkCore
│   ├── StudentRegistration.HttpApi
│   ├── StudentRegistration.HttpApi.Host
│   └── StudentRegistration.DbMigrator
└── angular/
    └── src/app/
        ├── department/
        └── student/


⚙️ Kurulum
🔹 Backend

StudentRegistration.HttpApi.Host projesini başlangıç projesi olarak ayarlayın.

Uygulamayı çalıştırın.

API:

https://localhost:44357

Swagger:

https://localhost:44357/swagger

🔹 Frontend

cd angular
npm install --legacy-peer-deps
npx ng serve --port 4200

Uygulama:

http://localhost:4200

🔐 Varsayılan Giriş Bilgileri

Kullanıcı Adı	Şifre

admin	1q2w3E*

🗄️ Veritabanı Tabloları

📘 Departments

Kolon	Tip	Açıklama

Id	Guid	Birincil anahtar

Name	string	Bölüm adı

Quota	int	Kontenjan

CreationTime	DateTime	ABP tarafından otomatik doldurulur

📘 Students
Kolon	Tip	Açıklama

Id	Guid	Birincil anahtar

FirstName	string	Öğrenci adı

LastName	string	Öğrenci soyadı

NationalId	string (11)	TC Kimlik

City	string	İl

District	string	İlçe

DepartmentId	Guid	Bölüm yabancı anahtarı

🧠 Teknik Detaylar

CRUD işlemleri ICrudAppService ve CrudAppService kullanılarak geliştirilmiştir.

Navigation property’ler WithDetails() ile eager loading şeklinde yüklenmiştir.

Mapping işlemleri AutoMapper profile sınıflarında tanımlanmıştır.

EF Core Migration ile veritabanı şeması yönetilmiştir.

Angular tarafında REST çağrıları ABP RestService ile yapılmıştır.

🚀 Geliştirilebilir Alanlar

TC Kimlik validasyonu (11 hane kontrolü)

Kontenjan doluluk kontrolü (Quota validation)

Rol bazlı yetkilendirme

Server-side pagination ve filtering

Unit test ve integration test eklenmesi
