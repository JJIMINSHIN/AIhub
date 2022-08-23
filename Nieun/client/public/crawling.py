from google_images_download import google_images_download   #importing the library

response = google_images_download.googleimagesdownload()   #class instantiation

arguments = { 
    "keywords":
    "박은빈, 박보영, 우기, 안유진, 해린, 채령, 제니, 미연, 재이","limit":8,"print_urls":True, "format": "jpg"}   #creating list of arguments

paths = response.download(arguments)   #passing the arguments to the function
print(paths)   #printing absolute paths of the downloaded images