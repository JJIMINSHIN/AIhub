from google_images_download import google_images_download   #importing the library

response = google_images_download.googleimagesdownload()   #class instantiation

arguments = { 
    "keywords":
    "우영우 정명석, 엑소 백현, 박보검, 송중기, 황민현, 엑소 시우민, 강동원, 이종석, 이준기, 마동석, 조진웅, 박성웅, 손석구, 윤두준, 이민기, 김우빈,  엑소 수호","limit":5,"print_urls":True, "format": "jpg"}   #creating list of arguments
paths = response.download(arguments)   #passing the arguments to the function
print(paths)   #printing absolute paths of the downloaded images